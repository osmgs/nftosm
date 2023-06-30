import React from "react";
import { ReactNode } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ label, options, value, onChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor={`${label}`}>{label}</label>
      <select
        id={`${label}Filter`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;