import { StarsCanvas } from "./StarsCanvas";

export function Backgrounds() {
  return (
    <>
      <div className="bg bg-night" aria-hidden>
        <StarsCanvas />
        <div className="nebula n1" />
        <div className="nebula n2" />
        <div className="nebula n3" />
        <div className="shooting" />
        <div className="grid-overlay" />
      </div>
      <div className="bg bg-day" aria-hidden>
        <div className="sun" />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="cloud c4" />
        <div className="cloud c5" />
        <div className="grid-overlay" />
      </div>
    </>
  );
}
