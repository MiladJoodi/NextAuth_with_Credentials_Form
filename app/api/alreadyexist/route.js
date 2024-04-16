import connectToDB from "@/libs/connectToDB";

export async function POST(request){
    try {
        await connectToDB();
    } catch (error) {
        
    }
}