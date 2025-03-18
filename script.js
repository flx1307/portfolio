// script.js

// Replace these with your real credentials
const SUPABASE_URL = "https://upespezhynwfwlfbqkpb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZXNwZXpoeW53ZndsZmJxa3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNTY0OTgsImV4cCI6MjA1MzYzMjQ5OH0.KYtQ08Zf4i27VXzHi5pHU0raIVcF7Anb_wS8CW1SW5M";

// Create a Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Now you can use `supabaseClient` anywhere in this file to interact with your database
console.log("Supabase client initialized:", supabaseClient);

// Example: fetch and log a table's data when the button is clicked
document.getElementById("fetchDataBtn").addEventListener("click", async () => {
    try {
        const { data, error } = await supabaseClient
            .from("contactDetails")      // Replace with your actual table name
            .select("*");          // Fetch all columns

        if (error) {
            throw error;
        }

        console.log("Data:", data);
        displayData(data);
    } catch (err) {
        console.error("Error fetching data:", err.message);
    }
});

// A simple function to display data on the page
function displayData(rows) {
    const container = document.getElementById("dataContainer");
    container.innerHTML = ""; // Clear previous data

    if (!rows || rows.length === 0) {
        container.textContent = "No data found.";
        return;
    }

    // Create a list to display rows
    const ul = document.createElement("ul");
    rows.forEach((row) => {
        const li = document.createElement("li");
        li.textContent = JSON.stringify(row);
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

// INDEX FILE BELOW HERE

    < !DOCTYPE html >
        <html>
            <head>
                <title>Supabase + Vanilla JS</title>
                <!-- Load the Supabase client from a CDN (version may vary) -->
                <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.8.0/dist/umd/supabase.js"></script>
            </head>
            <body>
                <h1>Supabase + Vanilla JS Demo</h1>

                <!-- Add a button to trigger a database fetch -->
                <button id="fetchDataBtn">Fetch Data</button>

                <!-- A container to show fetched data -->
                <div id="dataContainer"></div>

                <!-- Link to your custom script -->
                <script src="script.js"></script>
            </body>
        </html>