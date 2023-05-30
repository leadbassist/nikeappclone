import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigation } from "@react-navigation/native";
import { productsSlice } from "../store/productsSlice";
import { useGetProductsQuery } from "../store/apiSlice";

const ProductScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  // if (error) {
  //   return <Text>Error loading data</Text>;
  // }

  console.log("error: ", error);
  console.log("data: ", data);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
