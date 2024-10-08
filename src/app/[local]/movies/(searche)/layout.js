import SearchSidebar from '@/components/searche-sidebar/SearchSidebar';
import styles from './layout.module.scss';
import { getMovieByPath } from '@/utils/movieClient';

const MovieSearchLayout = async ({ children, params }) => {
  const { locale } = params;
  const { genres } = await getMovieByPath('/genre/movie/list', [], locale);

  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
