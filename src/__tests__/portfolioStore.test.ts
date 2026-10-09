import { describe, it, expect, beforeEach } from 'vitest';
import { usePortfolioStore, projects } from '../store/portfolioStore';

describe('Portfolio Store', () => {
  beforeEach(() => {
    // Reset store state before each test
    usePortfolioStore.setState({
      selectedProject: null,
      isModalOpen: false,
      hoveredPlanet: null,
    });
  });

  it('should initialize with correct default state', () => {
    const state = usePortfolioStore.getState();
    expect(state.selectedProject).toBeNull();
    expect(state.isModalOpen).toBe(false);
    expect(state.hoveredPlanet).toBeNull();
  });

  it('should set selected project', () => {
    const project = projects[0];
    usePortfolioStore.getState().setSelectedProject(project);
    expect(usePortfolioStore.getState().selectedProject).toEqual(project);
  });

  it('should toggle modal open state', () => {
    usePortfolioStore.getState().setModalOpen(true);
    expect(usePortfolioStore.getState().isModalOpen).toBe(true);

    usePortfolioStore.getState().setModalOpen(false);
    expect(usePortfolioStore.getState().isModalOpen).toBe(false);
  });

  it('should set hovered planet ID', () => {
    usePortfolioStore.getState().setHoveredPlanet(1);
    expect(usePortfolioStore.getState().hoveredPlanet).toBe(1);

    usePortfolioStore.getState().setHoveredPlanet(null);
    expect(usePortfolioStore.getState().hoveredPlanet).toBeNull();
  });
});
