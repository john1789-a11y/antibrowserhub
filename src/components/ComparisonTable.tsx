import { browsers } from "@/data/browsers";

export default function ComparisonTable() {
  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            {browsers.map((b) => (
              <th key={b.id}>{b.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overall Rating</td>
            {browsers.map((b) => (
              <td key={b.id}><strong>{b.rating.overall}/5</strong></td>
            ))}
          </tr>
          <tr>
            <td>Free Plan</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.pricing.free ? <span className="check">✓ {b.pricing.freeProfiles} profiles</span> : <span className="cross">✗</span>}</td>
            ))}
          </tr>
          <tr>
            <td>Starting Price</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.pricing.startingPrice}</td>
            ))}
          </tr>
          <tr>
            <td>API Support</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.hasAPI ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>
            ))}
          </tr>
          <tr>
            <td>Team Features</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.hasTeamFeatures ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>
            ))}
          </tr>
          <tr>
            <td>Cookie Import</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.hasCookieImport ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>
            ))}
          </tr>
          <tr>
            <td>Automation</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.automationSupport.join(", ")}</td>
            ))}
          </tr>
          <tr>
            <td>Platforms</td>
            {browsers.map((b) => (
              <td key={b.id} style={{ textTransform: "capitalize" }}>{b.platforms.join(", ")}</td>
            ))}
          </tr>
          <tr>
            <td>Founded</td>
            {browsers.map((b) => (
              <td key={b.id}>{b.foundedYear}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
