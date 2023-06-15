import { View, Button } from "@tarojs/components";
import { styled } from "@linaria/react";

const Home = () => {
  return (
    <HomeWrapper>
      <View className="title">Home</View>
      <Button type="primary">Button</Button>
    </HomeWrapper>
  );
};

const HomeWrapper = styled(View)`
  .title {
    color: red;
  }
`;

export default Home;
