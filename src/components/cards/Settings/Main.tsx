// Info_About.tsx

import React from 'react';

import {
  Card,
  CardContent,
} from '../../shadcn-ui/card';
import { Label } from '../../shadcn-ui/label';
import { Switch } from '../../shadcn-ui/switch';
import SearchSystemItem from '../../ui/SystemItem';
import { Button } from '../../shadcn-ui/button';
import { useSystemsContext,
  useStorageContext,
  useSystemToggleContext } from '../../../contexts/';

const MainSettingsCard: React.FC = () => {

  const { systems } = useSystemsContext();
  const { isResetDisabled } = useSystemToggleContext();
  const { resetLocalStorage, updateSearchInitiatedBlock,
    initiateSearchImmediately, setInitiateSearchImmediately,
    customModeOnLoad, setCustomModeOnLoad,
    systemsCustomOrder, systemsDeleted
  } = useStorageContext();


  const toggleInitiateSearchImmediately = () => {
    updateSearchInitiatedBlock(true);
    setInitiateSearchImmediately(!initiateSearchImmediately);
  }


  return (
    <>
      <Card className='w-9/10" border-none shadow-none mx-auto'>
        <CardContent >
          <div className='border rounded-md p-4 flex flex-col space-y-1 mx-2 mb-4'>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <Label htmlFor="default-custom-mode" className="text-center w-2/3">
                Default to custom mode on load.
              </Label>
              <div className="inline-flex items-center">
                <Switch
                  id="default-custom-mode"
                  checked={customModeOnLoad}
                  onCheckedChange={() => setCustomModeOnLoad(!customModeOnLoad)}
                  className="focus-visible:ring-primary"
                />
                <span className={`ml-2 text-sm font-semibold ${customModeOnLoad ? 'text-green-500' : 'text-red-500'}`}>
                  {customModeOnLoad ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              {systemsCustomOrder.length === 0 && (
                <p className="ml-2 text-sm text-gray-500">Note: You do <span className='underline'>not</span> currently have a custom order is set.</p>
              )}
            </div>
          </div>
          <div className='border rounded-md p-4 flex flex-col space-y-1 mx-2 mb-4'>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <Label htmlFor="initiate-search-immediately" className="text-center w-2/3 ">
                Immediately initiate URL-driven search upon page load.
              </Label>
              <div className="inline-flex items-center">
                <Switch
                  id="initiate-search-immediately"
                  checked={initiateSearchImmediately}
                  onCheckedChange={toggleInitiateSearchImmediately}
                  className="focus-visible:ring-primary"
                />
                <span id="initiate-search-immediately-status"
                  className={`ml-2 text-sm font-semibold ${initiateSearchImmediately ? 'text-green-500' : 'text-red-500'}`}>
                  {initiateSearchImmediately ? 'Enabled' : 'Disabled'}
                </span>
              </div>

              <p className="text-xs">
                Syntax: <code>/?q=%s</code>.
              </p>
              <p className="text-xs">For example, try <a className="underline" href="/?q=an+example+query" target="_blank" rel="noopener noreferrer">/?q=an+example+query</a>.
              </p>

            </div>
          </div>
          <div className='border rounded-md p-4 flex flex-col space-y-1 mx-2 mb-4'>
            <Label className="w-2/3 mx-auto text-center">
              This will remove all 'Systems' data stored in your browser's localStorage and reset preferences to default.
            </Label>
            <Button
              variant="destructive"
              onClick={resetLocalStorage}
              disabled={isResetDisabled}
            >
              Reset Local Storage
            </Button>
            {isResetDisabled && (
              <p className="text-xs text-center">No preferences are saved. You're using the default settings.</p>
            )}
          </div>
          <div className='flex flex-col space-y-1 mx-2 mb-1'>
            <Label className="w-4/5 text-center mx-auto">
              Deleted Systems
            </Label>
          </div>
          <div id="settings-systems-list">
            {Object.values(systemsDeleted).every(value => !value) ? (
              <p>No systems have been deleted.</p>
            ) : (
              Object.entries(systemsDeleted).filter(([_, value]) => value).map(([systemId, _], index) => {
                const system = systems.find((system) => system.id === systemId);
                if (!system) {
                  console.error(`System with ID ${systemId} not found.`);
                  return null;
                }
                return (
                  <div key={systemId} className="w-full">
                    <SearchSystemItem
                      id={systemId}
                      system={system}
                      showDisableDeleteButtons={true}
                      showDragHandle={false}
                    />
                  </div>
                );
              })
            )}
          </div>

        </CardContent>
      </Card>

    </>
  );
};

export default MainSettingsCard;
