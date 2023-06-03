import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RiArrowGoBackLine } from 'react-icons/ri';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

import Button from 'components/Shared/Button';
import { Panel, ActionsBox } from './ActionsPanel.styled';
import Filter from './Filter';

const ActionsPanel = ({ setFilters, setUsers, setPage }) => {
  const navigate = useNavigate();

  const [FilterOpen, setFilterOpen] = useState(false);

  return (
    <Panel>
      <ActionsBox>
        <li>
          <Button
            onClick={() => navigate(-1)}
            icon={RiArrowGoBackLine}
            iconSize={20}
          >
            Go back
          </Button>
        </li>
        <li>
          <div style={{ position: 'relative' }}>
            <Button
              onClick={() => setFilterOpen(prev => !prev)}
              icon={FilterOpen ? BsCaretUpFill : BsCaretDownFill}
              iconSize={20}
            >
              Filters
            </Button>
            {FilterOpen && (
              <Filter
                setFilters={setFilters}
                setUsers={setUsers}
                setPage={setPage}
              />
            )}
          </div>
        </li>
      </ActionsBox>
    </Panel>
  );
};

export default ActionsPanel;
