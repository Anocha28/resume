export function PrintToolbar() {
  return (
    <div className="toolbar no-print">
      <a href={import.meta.env.BASE_URL}>← Back to portfolio</a>
      <span className="hint">Tip: in the print dialog, turn off “Headers and footers”.</span>
      <button type="button" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
    </div>
  )
}
