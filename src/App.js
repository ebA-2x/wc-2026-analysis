import React, { useState } from "react";

export default function WorldCupPredictor() {
  const [teamA, setTeamA] = useState("France");
  const [teamB, setTeamB] = useState("Argentina");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const teams = [
    "Argentina", "France", "Spain", "Brazil", "England",
    "Germany", "Netherlands", "Portugal", "Belgium", "USA",
    "Mexico", "Canada", "Morocco", "Croatia", "Uruguay",
    "Colombia", "Switzerland", "Austria", "Egypt", "Australia",
    "Norway", "Ghana", "Senegal", "Japan", "South Africa",
    "Algeria", "Cape Verde", "Bosnia & Herzegovina", "Paraguay",
    "Ivory Coast", "Ecuador", "DR Congo"
  ];

  async function predict() {
    if (teamA === teamB) {
      alert("Select two different teams");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const predictions = {
        "France-Argentina": { prob: 55, form: { a: 8, b: 7 }, squad: { a: 9, b: 9 }, experience: { a: 9, b: 9 }, defense: { a: 8, b: 8 }, attack: { a: 9, b: 9 }, fitness: { a: 8, b: 7 }, verdict: "Evenly matched final contenders. France's experience in big matches gives slight edge." },
        "Brazil-France": { prob: 52, form: { a: 8, b: 8 }, squad: { a: 9, b: 9 }, experience: { a: 8, b: 9 }, defense: { a: 7, b: 8 }, attack: { a: 9, b: 9 }, fitness: { a: 8, b: 8 }, verdict: "High-quality attacking football. France's defensive stability vs Brazil's attacking flair." },
        "Spain-Germany": { prob: 50, form: { a: 8, b: 7 }, squad: { a: 8, b: 8 }, experience: { a: 9, b: 8 }, defense: { a: 8, b: 7 }, attack: { a: 8, b: 8 }, fitness: { a: 8, b: 7 }, verdict: "Classic European heavyweight clash. Ball possession vs efficient defense." },
        "England-Argentina": { prob: 48, form: { a: 7, b: 8 }, squad: { a: 8, b: 8 }, experience: { a: 7, b: 9 }, defense: { a: 7, b: 8 }, attack: { a: 8, b: 9 }, fitness: { a: 8, b: 8 }, verdict: "Argentina's veteran team experience edges young England squad." },
      };

      const key = `${teamA}-${teamB}`;
      const reverseKey = `${teamB}-${teamA}`;
      
      let data;
      if (predictions[key]) {
        data = predictions[key];
      } else if (predictions[reverseKey]) {
        const p = predictions[reverseKey];
        data = {
          prob: 100 - p.prob,
          form: { a: p.form.b, b: p.form.a },
          squad: { a: p.squad.b, b: p.squad.a },
          experience: { a: p.experience.b, b: p.experience.a },
          defense: { a: p.defense.b, b: p.defense.a },
          attack: { a: p.attack.b, b: p.attack.a },
          fitness: { a: p.fitness.b, b: p.fitness.a },
          verdict: p.verdict
        };
      } else {
        const teamStrengths = {
          "France": 9, "Argentina": 8, "Brazil": 9, "Spain": 8, "Germany": 8,
          "England": 7, "Netherlands": 7, "Belgium": 7, "Portugal": 7, "USA": 6,
          "Mexico": 6, "Uruguay": 7, "Croatia": 7, "Austria": 6, "Switzerland": 6,
          "Morocco": 6, "Canada": 5, "Australia": 5, "Japan": 5
        };
        
        const strengthA = teamStrengths[teamA] || 6;
        const strengthB = teamStrengths[teamB] || 6;
        const total = strengthA + strengthB;
        const prob = Math.round((strengthA / total) * 100);
        
        data = {
          prob,
          form: { a: 7, b: 7 },
          squad: { a: strengthA, b: strengthB },
          experience: { a: strengthA - 1, b: strengthB - 1 },
          defense: { a: 7, b: 7 },
          attack: { a: 8, b: 8 },
          fitness: { a: 7, b: 7 },
          verdict: `${teamA} vs ${teamB}: Close match based on squad strength and tournament form.`
        };
      }

      setResult({
        teamA,
        teamB,
        probA: data.prob,
        form: data.form,
        squad: data.squad,
        experience: data.experience,
        defense: data.defense,
        attack: data.attack,
        fitness: data.fitness,
        verdict: data.verdict
      });
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  const probA = result?.probA || 50;
  const probB = 100 - probA;

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 700, margin: "0 auto", padding: "20px", background: "#f5f5f0", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8, textAlign: "center" }}>⚽ World Cup 2026</h1>
      <p style={{ color: "#666", marginBottom: 24, textAlign: "center" }}>Matchup Predictor</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: "bold", color: "#333", display: "block", marginBottom: 6 }}>Team A</label>
          <select 
            value={teamA} 
            onChange={(e) => setTeamA(e.target.value)} 
            style={{ width: "100%", padding: "10px 12px", fontSize: 14, border: "2px solid #333", borderRadius: 6, fontWeight: 500 }}
          >
            {teams.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: "bold", color: "#333", display: "block", marginBottom: 6 }}>Team B</label>
          <select 
            value={teamB} 
            onChange={(e) => setTeamB(e.target.value)} 
            style={{ width: "100%", padding: "10px 12px", fontSize: 14, border: "2px solid #333", borderRadius: 6, fontWeight: 500 }}
          >
            {teams.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={predict}
        disabled={loading}
        style={{
          width: "100%",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "bold",
          background: loading ? "#ccc" : "#2c5aa0",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "24px"
        }}
      >
        {loading ? "Analyzing..." : "Predict Winner"}
      </button>

      {result && (
        <div style={{ background: "white", border: "2px solid #333", borderRadius: 8, padding: 24 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, marginBottom: 16, textAlign: "center", fontWeight: "bold" }}>Win Probability</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, textAlign: "center", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 48, fontWeight: "bold", color: probA >= probB ? "#2c5aa0" : "#999" }}>
                  {probA}%
                </div>
                <div style={{ fontSize: 16, color: "#333", fontWeight: "500", marginTop: 8 }}>{result.teamA}</div>
              </div>
              <div>
                <div style={{ fontSize: 48, fontWeight: "bold", color: probB >= probA ? "#2c5aa0" : "#999" }}>
                  {probB}%
                </div>
                <div style={{ fontSize: 16, color: "#333", fontWeight: "500", marginTop: 8 }}>{result.teamB}</div>
              </div>
            </div>

            <div style={{ display: "flex", height: 16, borderRadius: 8, overflow: "hidden", background: "#e8e8e0" }}>
              <div style={{ width: probA + "%", background: "#2c5aa0" }}></div>
              <div style={{ width: probB + "%", background: "#999" }}></div>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 14 }}>Factor Ratings (0-10)</h3>
            {[
              { label: "Recent Form", key: "form" },
              { label: "Squad Quality", key: "squad" },
              { label: "Big Match Experience", key: "experience" },
              { label: "Defensive Solidity", key: "defense" },
              { label: "Attacking Threat", key: "attack" },
              { label: "Fitness & Injuries", key: "fitness" }
            ].map(f => {
              const aVal = result[f.key]?.a || 5;
              const bVal = result[f.key]?.b || 5;
              return (
                <div key={f.key} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6, fontWeight: "500" }}>
                    <span>{f.label}</span>
                    <span>{aVal.toFixed(1)} vs {bVal.toFixed(1)}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ flex: 1, background: "#e8e8e0", height: 8, borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: (aVal / 10) * 100 + "%", background: "#2c5aa0", height: "100%" }}></div>
                    </div>
                    <div style={{ flex: 1, background: "#e8e8e0", height: 8, borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: (bVal / 10) * 100 + "%", background: "#666", height: "100%" }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ background: "#f0f0e8", padding: 16, borderRadius: 8, borderLeft: "6px solid #2c5aa0" }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#333" }}>
              <strong>Analysis:</strong> {result.verdict}
            </p>
            <p style={{ margin: "12px 0 0 0", fontSize: 14, fontWeight: "bold", color: "#2c5aa0" }}>
              Predicted Winner: <span style={{ fontSize: 16 }}>{probA > probB ? result.teamA : result.teamB}</span>
            </p>
          </div>
        </div>
      )}

      {!result && (
        <div style={{ textAlign: "center", color: "#999", padding: "40px 20px" }}>
          <p style={{ fontSize: 14 }}>Select two teams and click "Predict Winner" to see the analysis</p>
        </div>
      )}
    </div>
  );
}