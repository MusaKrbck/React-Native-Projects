// FavoriteScreen.js
import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorite-context';
import MealItem from '../components/MealsList/MealItem'; // MealItem bileşenini import ediyoruz
import { MEALS } from '../data/dummy-data'; // Yemek verilerini import ediyoruz

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  if (!favoriteMealsCtx || !favoriteMealsCtx.ids) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem 
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
