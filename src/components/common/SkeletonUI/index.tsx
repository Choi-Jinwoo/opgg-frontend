import styled from 'styled-components';

const SkeletonUI = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray3};
`;

export default SkeletonUI;
