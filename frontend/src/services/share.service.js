import api from './api';

export const shareService = {
  getCollaborators: async (fileId) => {
    const { data } = await api.get(`/share/${fileId}/users`);
    return data;
  },

  addCollaborator: async (fileId, address, role) => {
    const { data } = await api.post(`/share/${fileId}/add`, { address, role });
    return data;
  },

  revokeAccess: async (fileId, address) => {
    const { data } = await api.post(`/share/${fileId}/revoke`, { address });
    return data;
  }
};