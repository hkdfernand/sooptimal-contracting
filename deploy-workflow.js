// Deploy workflow to n8n cloud instance
import fs from 'fs';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTE1ODJiMy0zZDJkLTRmYTItOWJkOS0yNjJkOGQ5ZDY4ZjgiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMTljZjI5ZDUtNjA4ZS00MTNiLTk5NzMtYWQ2MTdlYTZhOTM5IiwiaWF0IjoxNzc4NTcyNjg5LCJleHAiOjE3ODYzMzQ0MDB9.KuUN51uq5IdZp-_7PbFN79bhPmDLcwNnSeRcXeGD3cE';
const N8N_URL = 'https://hkdfernand.app.n8n.cloud';

async function deployWorkflow() {
    try {
        // Read the workflow file
        const workflowData = JSON.parse(fs.readFileSync('./n8n-workflows/sooptimal-workflow-final.json', 'utf8'));
        
        console.log('🚀 Deploying SoOptimal Contracting workflow to n8n cloud...');
        
        const response = await fetch(`${N8N_URL}/api/v1/workflows`, {
            method: 'POST',
            headers: {
                'X-N8N-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workflowData)
        });
        
        if (!response.ok) {
            throw new Error(`Failed to deploy: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('✅ Workflow deployed successfully!');
        console.log(`📋 Workflow ID: ${result.id}`);
        console.log(`🔗 Webhook URL: ${N8N_URL}/webhook/sooptimal-quote`);
        
        // Now activate the workflow
        const activateResponse = await fetch(`${N8N_URL}/api/v1/workflows/${result.id}/activate`, {
            method: 'POST',
            headers: {
                'X-N8N-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            }
        });
        
        if (activateResponse.ok) {
            console.log('🟢 Workflow activated successfully!');
            console.log('');
            console.log('🎯 Next steps:');
            console.log('1. Configure email credentials in the n8n UI');
            console.log('2. Set up Google Sheets integration');
            console.log(`3. Update website with webhook URL: ${N8N_URL}/webhook/sooptimal-quote`);
        }
        
        return result;
        
    } catch (error) {
        console.error('❌ Error deploying workflow:', error.message);
    }
}

deployWorkflow();