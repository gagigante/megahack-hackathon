import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #4F00C3;
`;

export const Card = styled.View`
  margin: 30px 10px 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;

export const RankText = styled.Text`
  color: #595959;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;

export const RankHighlight = styled.Text`
  color: #6BD5E1;
`;

export const XpView = styled.View`
  padding: 15px 0;
  justify-content: center;
  align-items: center;
`;

export const XpText = styled.Text`
  margin-bottom: 8px;
`;

export const RankTitle = styled.Text`
  font-size: 28px;
  color: #7E00DE;
`;

export const ItemView = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 2px;
  padding: 10px;
  border-color: #a1a1a1;
`;

export const DataView = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NameText = styled.Text`
  font-size: 15px;
`;

export const XpInfo = styled.Text``;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 22px;
  text-align: center;
  color: #a1a1a1;
`;
