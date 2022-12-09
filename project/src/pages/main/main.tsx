import Layout from '../../components/layout/layout';
import CityTabs from '../../components/cities-tabs/cities-tabs';
import {CITIES} from '../../constants';
import {getOffersByCity} from '../../utils';
import {useAppSelector} from '../../hooks';
import CitiesWithOffers from '../../components/cities-with-offers/cities-with-offers';
import CitiesEmptyOffers from '../../components/cities-empty/cities-empty';
import {getCurrentCity} from '../../store/user-actions/selectors';
import {getOffers} from '../../store/offers-data/selectors';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = getOffersByCity(currentCity, offers);

  return (
    <Layout className={['page--gray', 'page--main', `${offersByCity.length ? '' : 'page__main--index-empty'}`]}>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs cities={CITIES} activeCity={currentCity} />
        <div className="cities">
          {offersByCity.length ? <CitiesWithOffers offersByCity={offersByCity} currentCity={currentCity} /> : <CitiesEmptyOffers />}
        </div>
      </main>

    </Layout>
  );
}

export default MainPage;
