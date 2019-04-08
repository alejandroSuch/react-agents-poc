export const loading = state => state.loading || false;
export const homeAgents = state => state.homeAgents || [];
export const selectedAgent = state => state.selected;
export const selectedAgentName = state => {
  const homeAgent = selectedAgent(state);
  return homeAgent && homeAgent.name;
};
