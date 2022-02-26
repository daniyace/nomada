import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Cosmic from 'cosmicjs';
import Swal from 'sweetalert2';
import Layout from '../../components/nomada/Layout';
import Seo from '../../components/Seo';
import FoodGrid from '../../components/nomada/FoodGrid';
import DrinksGrid from '../../components/nomada/DrinksGrid';
import '../../components/nomada/styles/grid.sass';

const api = Cosmic();

const bebidas = api.bucket({
  slug: 'nomada-menu',
  read_key: '48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI',
});

const fetchDrinks = async () => {
  const data = await bebidas.getObjects({
    props: 'type,metadata',
  });
  return data;
};

const fetchTypesDrinks = async () => {
  const data = await bebidas.getObjectTypes();
  return data;
};

const comida = api.bucket({
  slug: 'nomada-tacos',
  read_key: 'dBfS2Jkuf7Olnx3o0DM4BFUJR9UjzLSRJsZPed7IbOILAMatyz',
});

const fetchFood = async () => {
  const data = await comida.getObjects({
    props: 'type,metadata',
  });
  return data;
};

const fetchTypesFood = async () => {
  const data = await comida.getObjectTypes();
  return data;
};

const NomadaIndex = () => {
  const [bebidas, setBebidas] = useState([]);
  const [comida, setComida] = useState([]);
  const [isLoadingDrinks, setIsLoadingDrinks] = useState(true);
  const [isLoadingFood, setIsLoadingFood] = useState(true);

  const { data, error } = useSWR('fetch-products', fetchDrinks);
  const { data: types, errort } = useSWR('fetch-types', fetchTypesDrinks);

  const { data: food, errorf } = useSWR('fetch-food', fetchFood);
  const { data: typesf, errorft } = useSWR('fetch-types-food', fetchTypesFood);

  useEffect(() => {
    const extractType = (types, data) => {
      let aux = [];
      //order types by types.order
      types.object_types.sort((a, b) => a.order - b.order);
      types.object_types.forEach(async (type) => {
        await aux.push({
          type: type.slug,
          products: data.objects.filter((item) => item.type === type.slug),
        });
      });

      setBebidas(aux);
      setIsLoadingDrinks(false);
    };
    if (data && types) {
      extractType(types, data);
    }
    if (error || errort) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al cargar los datos',
        icon: 'error',
      });
    }
  }, [data, types, error, errort]);

  useEffect(() => {
    const extractType = (typesf, food) => {
      let aux = [];
      typesf.object_types.sort((a, b) => a.order - b.order);
      typesf.object_types.forEach(async (type) => {
        await aux.push({
          type: type.slug,
          products: food.objects.filter((item) => item.type === type.slug),
        });
      });

      setComida(aux);
      setIsLoadingFood(false);
    };
    if (food && typesf) {
      extractType(typesf, food);
    }
    if (errorf || errorft) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al cargar los datos',
        icon: 'error',
      });
    }
  }, [food, typesf, errorf, errorft]);

  return (
    <>
      <Seo title='Nómada' />
      <Layout>
        <section className='container grid-container'>
          {!isLoadingFood && (
            <FoodGrid
              title='Comida'
              products={comida}
              isLoading={isLoadingFood}
            />
          )}
          <div className='pt-3'>
            {!isLoadingDrinks && (
              <DrinksGrid
                title='Bebidas'
                products={bebidas}
                isLoading={isLoadingDrinks}
              />
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NomadaIndex;
