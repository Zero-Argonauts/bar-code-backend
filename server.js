import express from 'express';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/assets/:id', (req, res) => {
  const { id } = req.params;
  const data = id.split(';');

  const headers = [
    "Asset Code",
    "Serial Number",
    "Asset Type",
    "Category",
    "Company/Vendor Name",
    "Quantity",
    "Purchase Date",
    "Expiry/Warranty Date",
    "Purchase Invoice/Ref No",
    "Department/Location"
  ];

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Asset Details</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
        .container {
          max-width: 700px;
          margin: auto;
          background: white;
          border-radius: 8px;
          padding: 20px;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        th {
          background: #f4f4f4;
          width: 40%;
        }
        /* Mobile styles */
        @media (max-width: 600px) {
          table, tbody, tr, th, td {
            display: block;
            width: 100%;
          }
          tr {
            margin-bottom: 15px;
            border: 1px solid #ddd;
            overflow: hidden;
          }
          th {
            background: #fafafa;
            font-weight: bold;
            padding: 10px;
          }
          td {
            padding: 10px;
            border-top: 1px solid #eee;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Asset Details</h2>
        <table>
          ${headers.map((h, i) => `
            <tr>
              <th>${h}</th>
              <td>${data[i] || ''}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </body>
    </html>
  `);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})