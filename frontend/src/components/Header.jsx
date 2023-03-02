import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/login">{t('Hexlet chat-header.title')}</a>

      </div>
    </nav>
  );
};

export default Header;
