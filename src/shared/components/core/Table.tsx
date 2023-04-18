type column = {
  key: string;
  value: string;
};

type row = {
  [key: string]: any;
};

interface TableProps {
  className?: string;
  columns: column[];
  rows: row[];
}

export const Table = (props: TableProps) => {
  const { className, columns, rows } = props;
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
