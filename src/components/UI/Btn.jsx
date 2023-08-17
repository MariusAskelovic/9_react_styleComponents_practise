import styled from 'styled-components';

export const Btn = styled.button`
  height: 56px;
  padding: 16px 28px;
  text-align: center;
  border-radius: 6px;
  border: none;
  background-color: #d5dae1;
  color: #333f51;
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
`;

export const GreenBtn = styled(Btn)`
  background-color: #22c55e;
  color: #f0fdf4;
`;

export const EmptyBtn = styled(Btn)`
  color: #556987;
  font-size: 16px;
  line-height: 24px;
  background-color: white;
`;

export const GreenBtn2 = styled(Btn)`
  background-color: #22c55e;
  padding: 8px 16px;
  color: #f0fdf4;
  font-size: 14px;
`;
