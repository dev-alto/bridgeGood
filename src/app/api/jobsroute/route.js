import postgres from 'postgres'

async function refreshData() {
    const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' })

    const response = await sql`SELECT version()`
    console.log(response)

    
    
    return response
}

export async function GET(request) {

    const body = await request.json()
    console.log(body)

    return new Response(await refreshData())
}

export async function POST(request) {

    const body = await request.json()

    return new Response(JSON.stringify({ reponder: body.test }))

}