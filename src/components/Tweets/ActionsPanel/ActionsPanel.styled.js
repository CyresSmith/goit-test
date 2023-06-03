import styled from 'styled-components';

export const Panel = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const ActionsBox = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]};
  margin-left: auto;
`;
