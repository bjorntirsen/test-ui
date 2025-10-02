import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { columns, type Payment } from "./data-table/columns";
import { DataTable } from "./data-table/data-table";
import { payments } from "./payments";

function fetchPayments(): Promise<Payment[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(payments), 1000); // simulate network delay
  });
}

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button
        onClick={() => {
          setLoading(true);
          fetchPayments().then((res) => {
            setData(res);
            setLoading(false);
          });
        }}
      >
        Fetch again
      </Button>

      {loading ? (
        <div className="flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="m-4">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
