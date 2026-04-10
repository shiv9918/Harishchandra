const normalizeCellText = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');

const isHeaderDuplicateRow = (headers = [], row = []) => {
  if (!headers.length || !row.length) return false;

  const normalizedHeaders = headers.map(normalizeCellText).filter(Boolean);
  if (!normalizedHeaders.length) return false;

  const normalizedRow = row.map(normalizeCellText).filter(Boolean);
  if (!normalizedRow.length) return false;

  if (normalizedRow.length === 1) {
    return normalizedRow[0] === normalizedHeaders.join('');
  }

  if (normalizedRow.length >= normalizedHeaders.length) {
    return normalizedHeaders.every((header, index) => normalizedRow[index] === header);
  }

  return false;
};

const sanitizeContentHtml = (html) => {
  if (!html || typeof window === 'undefined') return html;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  const getRowValues = (row) =>
    Array.from(row.querySelectorAll('th, td')).map((cell) => cell.textContent?.trim() || '');

  const hasMeaningfulCells = (values = []) => values.some((value) => normalizeCellText(value));

  // Fix legacy split layout: header-only table followed by data-only table.
  Array.from(wrapper.querySelectorAll('table')).forEach((table) => {
    const thead = table.querySelector('thead');
    if (!thead) return;

    const tbody = table.querySelector('tbody');
    const bodyRows = tbody ? Array.from(tbody.querySelectorAll(':scope > tr')) : [];
    const hasDataRows = bodyRows.some((row) => hasMeaningfulCells(getRowValues(row)));
    if (hasDataRows) return;

    let nextTable = table.nextElementSibling;
    while (nextTable && nextTable.tagName !== 'TABLE') {
      nextTable = nextTable.nextElementSibling;
    }

    if (!nextTable || nextTable.querySelector('thead')) return;

    nextTable.insertBefore(thead.cloneNode(true), nextTable.firstChild);
    table.remove();
  });

  wrapper.querySelectorAll('table').forEach((table) => {
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    if (!thead || !tbody) return;

    const headerRow = thead.querySelector('tr');
    if (!headerRow) return;

    const headers = Array.from(headerRow.querySelectorAll('th, td')).map((cell) => cell.textContent?.trim() || '');
    let firstBodyRow = tbody.querySelector(':scope > tr');

    // Remove leading empty rows to avoid visual gaps below header.
    while (firstBodyRow && !hasMeaningfulCells(getRowValues(firstBodyRow))) {
      const nextRow = firstBodyRow.nextElementSibling;
      firstBodyRow.remove();
      firstBodyRow = nextRow;
    }

    if (!firstBodyRow) return;

    const firstBodyCells = getRowValues(firstBodyRow);
    if (isHeaderDuplicateRow(headers, firstBodyCells)) {
      firstBodyRow.remove();
    }
  });

  // Convert plain URL-only text into clickable anchors (useful for legacy list rows).
  const urlOnlyPattern = /^https?:\/\/[^\s]+$/i;
  wrapper.querySelectorAll('li, p, td').forEach((element) => {
    if (element.querySelector('a')) return;

    const text = (element.textContent || '').trim();
    if (!urlOnlyPattern.test(text)) return;

    const anchor = document.createElement('a');
    anchor.href = text;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = text;

    element.textContent = '';
    element.appendChild(anchor);
  });

  return wrapper.innerHTML;
};

const renderHtml = (html) => ({ __html: sanitizeContentHtml(html) });

const getRowTemplate = (count) => `repeat(${Math.max(count, 1)}, minmax(0, 1fr))`;

export const CmsContent = ({
  content,
  blocks = [],
  contentClassName = '',
  blocksContainerClassName = 'space-y-4',
  blockClassName = 'mt-6',
  imageClassName = 'max-w-full h-auto rounded-lg shadow-md mx-auto',
  videoClassName = 'w-full rounded-lg',
  rowClassName = 'grid gap-4',
  columnClassName = 'min-w-0 rounded-lg border border-[#913c07]/20 bg-white p-4',
  tableClassName = 'w-full min-w-[640px] border-collapse text-sm',
  tableHeaderClassName = 'bg-[#913c07] text-white px-3 py-2 text-left font-semibold',
  tableCellClassName = 'px-3 py-2 align-top',
  emptyState = null,
}) => {
  const hasContent = Boolean(content) || (blocks && blocks.length > 0);

  if (!hasContent) {
    return emptyState;
  }

  return (
    <div className={`cms-content ${contentClassName}`}>
      {content && <div className="cms-content" dangerouslySetInnerHTML={renderHtml(content)} />}

      {blocks && blocks.length > 0 && (
        <div className={blocksContainerClassName}>
          {blocks.map((block) => {
            if (block.type === 'text') {
              return (
                <div key={block.id} className={blockClassName} dangerouslySetInnerHTML={renderHtml(block.content)} />
              );
            }

            if (block.type === 'image' && block.url) {
              return (
                <div key={block.id} className={blockClassName}>
                  <img src={block.url} alt={block.alt || 'Content block'} className={imageClassName} />
                </div>
              );
            }

            if (block.type === 'video' && block.url) {
              return (
                <div key={block.id} className={blockClassName}>
                  <video src={block.url} controls className={videoClassName} />
                </div>
              );
            }

            if (block.type === 'row') {
              const columns = Array.isArray(block.columns) ? block.columns : [];

              return (
                <div key={block.id} className={blockClassName}>
                  <div
                    className={rowClassName}
                    style={{ gridTemplateColumns: getRowTemplate(columns.length || 1) }}
                  >
                    {columns.length > 0 ? (
                      columns.map((column) => (
                        <div key={column.id} className={columnClassName}>
                          {column.title && (
                            <h3 className="mb-3 text-lg font-semibold text-[#913c07]">
                              {column.title}
                            </h3>
                          )}
                          {column.content ? (
                            <div dangerouslySetInnerHTML={renderHtml(column.content)} />
                          ) : (
                            <p className="text-sm text-[#563c29]/70">Empty column</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className={columnClassName}>
                        <p className="text-sm text-[#563c29]/70">Empty row</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            if (block.type === 'table') {
              const columns = Array.isArray(block.columns) ? block.columns : [];
              const rows = Array.isArray(block.rows) ? block.rows : [];

              return (
                <div key={block.id} className={blockClassName}>
                  {block.title && (
                    <h3 className="mb-4 text-xl font-semibold text-[#913c07]">
                      {block.title}
                    </h3>
                  )}

                  <div className="overflow-x-auto">
                    <table className={tableClassName}>
                      <thead>
                        <tr>
                          {columns.length > 0 ? (
                            columns.map((column, index) => (
                              <th key={column.id} className={tableHeaderClassName}>
                                {column.label || `Column ${index + 1}`}
                              </th>
                            ))
                          ) : (
                            <th className={tableHeaderClassName}>Table</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.length > 0 ? (
                          rows.map((row, rowIndex) => (
                            <tr key={row.id} className="border-b border-[#913c07]/15 hover:bg-[#fff8e7]">
                              {(columns.length > 0 ? columns : [{ id: 'fallback-column', label: 'Column 1' }]).map((column, columnIndex) => {
                                const cell = row.cells?.[columnIndex];

                                return (
                                  <td key={column.id} className={tableCellClassName}>
                                    {cell?.content ? (
                                      <div dangerouslySetInnerHTML={renderHtml(cell.content)} />
                                    ) : (
                                      <span className="text-xs text-[#563c29]/70">Row {rowIndex + 1} empty</span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td className={tableCellClassName}>
                              <p className="text-sm text-[#563c29]/70">Empty table</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default CmsContent;