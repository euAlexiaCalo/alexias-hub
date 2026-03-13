import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './SkillBar.css';

interface SkillBarProps {
    label: string;
    targetValue: number;
    color: string;
}

export const SkillBar = ({ label, targetValue, color }: SkillBarProps) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <div ref={ref} className="skill-container">
      <div className="skill-info">
        <p className="skill-label">{label}</p>
        <p className="skill-value">{targetValue}%</p>
      </div>
      <div className="skill-progress-fill">
        <div
          style={{
            width: inView ? `${targetValue}%` : '0%',
            background: color,
          }}
          className="skill-progress-bar"
        />
      </div>
    </div>
  );
};