import Card from "@/components/card";
import { Components } from "@/components/globalComponents";
import Line from "@/components/line";
import data from "@/json/data.json";

export default function Interests() {

  return (
    <section>
        <div className="container px-40 max-lg:p-0">
            {Object.entries(data.home[0].interest[0]).map(([key, data])=>(
                <div key={key}>
                <Card>
                    <Components 
                        search={data[0]?.information[0]?.component}
                    />
                </Card>
                    {data[0] && "line" in data[0] && Array.isArray(data[0].line) && data[0].line[0] ? (
                        <Line number={key} />
                    ) : null}
                </div>
            ))}
        </div>
    </section>
  )
}