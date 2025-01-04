import { defineStore } from 'pinia';

// Mock data for tools
const mockTools = [
  {
    id: '1',
    name: 'AI Resume Builder Pro',
    category: 'resume',
    price: 15,
    description: 'AI-powered resume builder with ATS optimization',
    features: ['ATS Optimization', 'AI Content Suggestions', 'Multiple Templates'],
    rating: 4.5
  },
  {
    id: '2',
    name: 'Smart Cover Letter',
    category: 'cover-letter',
    price: 10,
    description: 'Generate personalized cover letters instantly',
    features: ['AI Writing', 'Industry Templates', 'Quick Generation'],
    rating: 4.2
  },
  {
    id: '3',
    name: 'JobMatch AI',
    category: 'job-platform',
    price: 20,
    description: 'AI-powered job matching and application tracking',
    features: ['Smart Matching', 'Application Tracking', 'Career Insights'],
    rating: 4.7
  }
];

export const useToolsStore = defineStore('tools', {
  state: () => ({
    tools: [],
    loading: false,
    error: null
  }),
  
  getters: {
    getToolsByCategory: (state) => (category) => {
      return state.tools.filter(tool => tool.category === category);
    },
    getToolsByPriceRange: (state) => (min, max) => {
      return state.tools.filter(tool => tool.price >= min && tool.price <= max);
    }
  },

  actions: {
    async fetchTools() {
      try {
        this.loading = true;
        // Simulate an API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network latency
        this.tools = mockTools;
      } catch (err) {
        this.error = 'Failed to fetch tools.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});
