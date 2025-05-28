import Background from "./common/Background";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import SearchForm from "./search/SearchForm";
import HeaderTop from "./layout/HeaderTop";
import JobItemContent from "./job/JobItemContent";
import Sidebar from "./layout/Sidebar";
import SidebarTop from "./layout/SidebarTop";
import PaginationControls from "./pagination/PaginationControls";
import ResultsCount from "./pagination/ResultsCount";
import SortingControls from "./search/SortingControls";
import { Toaster } from "react-hot-toast";
import JobListSearch from "./job/JobListSearch";

function App() {
  return (
    <>
      <Background />

      <Header>
        <HeaderTop />
        <SearchForm />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position={"top-right"} />
    </>
  );
}

export default App;
