export const loading = state => state.loading || false;
export const agents = state => state.agents || [];
export const selectedAgent = state => state.selected;
export const selectedAgentName = state => {
  const agent = selectedAgent(state);
  return agent && agent.name;
};
export const error = state => state.error;
