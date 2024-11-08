import { NextRequest, NextResponse } from "next/server";


const data = [
    {
        id: 1,
        task: "work on figma file",
        status: "done",
        date: "2023-03-01",
        client: "John Doe",
    },
] 


export function GET(req: NextRequest) {
  const searchQuery = req.nextUrl.searchParams.get("query")?.toLowerCase();

    const filteredData = searchQuery
        ? data.filter(item => item.task.toLowerCase().includes(searchQuery))
        : data;

    return NextResponse.json(filteredData);
};

export async function POST(req: Request) {
    try {
        const { task, status, date, client } = await req.json();
        
const id = data.length + 1;

          data.push({ id, task, status, date, client });
          return NextResponse.json({ message: "Task added successfully" });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message });       
    }   
}

// export function DELETE(req: Request) {
//     try {
//         const id = req.nextUrl.searchParams.get("id");
//         const index = data.findIndex(item => item.id === Number(id));
//         data.splice(index, 1);
//         return NextResponse.json({ message: "Task deleted successfully" });
//     } catch (error) {
//         return NextResponse.json({ error: (error as Error).message });       
//     }   
// }