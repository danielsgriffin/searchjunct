import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SystemList from '../SystemList';
import { StorageProvider } from '../contexts/StorageContext';
import { SystemProvider } from '../contexts/SystemsContext';
import { SearchProvider } from '../contexts/SearchContext';
import systemsData from '../../data/systems.json';

// Mock data
const systemsMock = [
    { id: "system-1", name: 'System 1', search_link: "ddd" },
    { id: "system-2", name: 'System 2', search_link: "ddd" }
];

// Mock SystemsContext
const MockSystemProvider = ({ children }: { children: React.ReactNode }) => (
    <SystemProvider testSystems={systemsMock}>
        {children}
    </SystemProvider>
);


const systemsDataLength = systemsData.length;


// Helper function to render the component within its required providers
function renderSystemList() {
    return render(
        <StorageProvider>
            <MockSystemProvider>
                <SearchProvider>
                    <SystemList />
                </SearchProvider>
            </MockSystemProvider>
        </StorageProvider>
    );
}

// Test cases
describe('SystemList Component', () => {
    it('renders without crashing with initialized data', async () => {
        // Act
        renderSystemList();
        // Assert
        await screen.findByText(/number of systems:/i);
    });

    it('displays the correct number of systems in the link', async () => {
        // Act
        renderSystemList();
        // Assert
        const link = await screen.findByRole('link', { name: /number of systems/i });
        expect(link).toHaveTextContent(`Number of systems: ${systemsDataLength}`);
    });
});