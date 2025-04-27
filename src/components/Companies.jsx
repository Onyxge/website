import ahwan from '../assets/company_logo/ahwan.JPG';
import bekas from '../assets/company_logo/bekas.PNG';
import brothers from '../assets/company_logo/brothers.PNG';
import dire from '../assets/company_logo/dire.JPG';
import geda from '../assets/company_logo/geda.JPG';
import merjan from '../assets/company_logo/merjan.JPG';
import naflet from '../assets/company_logo/naflet.PNG';

function Companies() {
  return (
    <div>
      <h1>Companies We Served</h1>
      <p>We serve a wide range of industries including:</p>
      <ul>
        <li><img src={ahwan} alt="Company 1 Logo" /></li>
        <li><img src={bekas} alt="Company 2 Logo" /></li>
        <li><img src={brothers} alt="Company 3 Logo" /></li>
        <li><img src={dire} alt="Company 4 Logo" /></li>
        <li><img src={geda} alt="Company 5 Logo" /></li>
        <li><img src={merjan} alt="Company 6 Logo" /></li>
        <li><img src={naflet} alt="Company 7 Logo" /></li>
      </ul>
    </div>
  );
}
export default Companies;