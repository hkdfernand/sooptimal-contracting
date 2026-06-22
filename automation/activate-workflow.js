// Activate SoOptimal Workflows
const N8N_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTE1ODJiMy0zZDJkLTRmYTItOWJkOS0yNjJkOGQ5ZDY4ZjgiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMjM3ZjE0ZmEtNjE2NS00NTQ0LTljMjAtOTMzZTFlNTRlY2Y1IiwiaWF0IjoxNzgwMzM4NDgzLCJleHAiOjE3ODgwNjI0MDB9.6Ll_gHDmQ0Yusst3yG99hJ-AIfQD3lFASGvacYNdinI';
const N8N_URL = 'https://hkdfernand.app.n8n.cloud/api/v1';

async function activateWorkflow(workflowId) {
  try {
    const response = await fetch(`${N8N_URL}/workflows/${workflowId}/activate`, {
      method: 'POST',
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log(`✅ Workflow ${workflowId} activated successfully!`);
      return true;
    } else {
      console.error(`❌ Failed to activate ${workflowId}:`, await response.text());
      return false;
    }
  } catch (error) {
    console.error('Error activating workflow:', error.message);
    return false;
  }
}

// Activate the lead qualification workflow
activateWorkflow('CkP1J5FKO1qMFlYh');