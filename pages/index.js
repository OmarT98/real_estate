import Head from "next/head";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import { useRouter } from "next/router";
import AreaCard from "../components/area-card";
import InfoCard from "../components/info-card";
import PropertyRent from "../components/property-rent";
import PropertyRentCard from "../components/property-rent-card";
import Footer from "../components/footer";

const LandingPage = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties-grid-view");
  }, [router]);

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="w-full h-[5096px] relative bg-gray-white flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
        <Header />
        <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
          <div className="self-stretch flex flex-col items-center justify-center gap-[62px_0px] max-w-[95%]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px_0px] md:max-w-full">
              <div className="self-stretch relative leading-[72px] font-semibold">
                Find Your Dream Home
              </div>
              <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-regular-600">
              <div className="flex flex-row items-start justify-start gap-[0px_10px]">
                <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
                  <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                    Rent
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
                  <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                    Sale
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
                <div className="flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[0px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                  <div className="w-[137px] flex flex-col items-start justify-start gap-[16px_0px] text-center">
                    <div className="relative leading-[24px] capitalize font-semibold">
                      Locations
                    </div>
                    <Dropdown
                      overlay={
                        <Menu>
                          {[
                            { value: "New York" },
                            { value: "Los Angeles" },
                            { value: "Chicago" },
                            { value: "Berlin" },
                          ].map((option, index) => (
                            <Menu.Item key={index}>
                              <a onClick={(e) => e.preventDefault()}>
                                {option.value || ""}
                              </a>
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        {`Select your city `}
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                  <div className="w-[177px] flex flex-col items-start justify-start gap-[16px_0px]">
                    <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                      Property Type
                    </div>
                    <Dropdown
                      className="self-stretch"
                      overlay={
                        <Menu>
                          {[
                            { value: "Studio apartments" },
                            { value: "One-bedroom apartments" },
                            { value: "Two-bedroom apartments" },
                            { value: "Three-bedroom apartments" },
                            { value: "Four or more bedroom apartments/houses" },
                          ].map((option, index) => (
                            <Menu.Item key={index}>
                              <a onClick={(e) => e.preventDefault()}>
                                {option.value || ""}
                              </a>
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        {`Select property type `}
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                  <div className="w-[155px] flex flex-col items-start justify-start gap-[16px_0px]">
                    <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                      Rent Range
                    </div>
                    <Dropdown
                      className="self-stretch"
                      overlay={
                        <Menu>
                          {[
                            { value: "$500-$2000" },
                            { value: "$2500-$10000" },
                            { value: "$10000+" },
                          ].map((option, index) => (
                            <Menu.Item key={index}>
                              <a onClick={(e) => e.preventDefault()}>
                                {option.value || ""}
                              </a>
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        {`Select rent range `}
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 w-[102px] rounded flex flex-row items-center justify-center box-border hover:bg-darkslateblue md:w-full md:hover:items-center md:hover:justify-center sm:self-stretch sm:w-auto sm:max-w-full sm:hover:self-stretch sm:hover:w-auto sm:hover:max-w-full"
                    onClick={onSearchCTAClick}
                  >
                    <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                      Search
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px_0px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px_0px] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%]">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px_0px] max-w-[1300px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[0px_26px] lg:flex-row md:flex-col">
                <AreaCard cityName="Centerville" />
                <AreaCard
                  cityName="Centerville"
                  propBackgroundImage="url('/card-2@3x.png')"
                  propPadding="unset"
                />
                <AreaCard
                  cityName="Centerville"
                  propBackgroundImage="url('/card-3@3x.png')"
                  propPadding="unset"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[0px_24px] lg:flex-row md:flex-col">
                <AreaCard
                  cityName="Arlington"
                  propBackgroundImage="url('/card-4@3x.png')"
                  propPadding="10px"
                />
                <AreaCard
                  cityName="Centerville"
                  propBackgroundImage="url('/card-5@3x.png')"
                  propPadding="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0">
          <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px_0px] max-w-[95%]">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px_0px] max-w-[95%]">
              <div className="self-stretch relative leading-[48px] font-semibold">
                Properties by Area
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
              <InfoCard
                listingImageId="/icon.svg"
                homeActionImageUrl="Sell your home"
              />
              <InfoCard
                listingImageId="/icon1.svg"
                homeActionImageUrl="Rent your home"
                propWidth="312px"
              />
              <InfoCard
                listingImageId="/icon2.svg"
                homeActionImageUrl="Buy a home"
                propWidth="unset"
              />
              <InfoCard
                listingImageId="/icon3.svg"
                homeActionImageUrl="Free marketing"
                propWidth="312px"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px_0px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
            <div className="w-[688px] flex flex-col items-center justify-start gap-[24px_0px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
              <div className="self-stretch relative leading-[48px] font-semibold">
                Latest Properties of Rent
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
              <PropertyRent
                dimensionText="/property-image7@2x.png"
                productDimensions="/ellipse-1@2x.png"
              />
              <PropertyRent
                dimensionText="/property-image8@2x.png"
                productDimensions="/ellipse-1@2x.png"
                propFlex="1"
                propMinWidth="355px"
                propWidth="unset"
              />
              <PropertyRent
                dimensionText="/property-image9@2x.png"
                productDimensions="/ellipse-1@2x.png"
                propFlex="1"
                propMinWidth="355px"
                propWidth="unset"
              />
              <PropertyRent
                dimensionText="/property-image10@2x.png"
                productDimensions="/ellipse-1@2x.png"
                propFlex="1"
                propMinWidth="355px"
                propWidth="unset"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
              Load more listing
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px_0px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] max-w-[95%]">
            <div className="w-[688px] flex flex-col items-center justify-start gap-[24px_0px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
              <div className="self-stretch relative leading-[48px] font-semibold">
                Latest Properties of Rent
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
              <PropertyRentCard />
              <PropertyRentCard propBackgroundImage="url('/card-21@3x.png')" />
              <PropertyRentCard propBackgroundImage="url('/card-31@3x.png')" />
              <PropertyRentCard propBackgroundImage="url('/card-41@3x.png')" />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
              Load more listing
            </div>
          </button>
        </div>
        <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
          <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px_0px] max-w-[900px]">
            <div className="w-[688px] flex flex-col items-center justify-start gap-[24px_0px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
              <div className="self-stretch relative leading-[48px] font-semibold">
                Contact us
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px_0px] text-left text-5xl text-darkslategray font-poppins">
              <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
                <b className="self-stretch h-9 relative leading-[36px] inline-block">
                  Enquiry Form
                </b>
                <div className="self-stretch relative text-[18px] leading-[30px] font-roboto text-slategray">
                  Are you looking for details about a certain property? Ask us a
                  question using the form below.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[10px_0px]">
                <div className="self-stretch flex flex-row items-start justify-center gap-[0px_10px] md:flex-col md:gap-[0px_10px] md:items-start md:justify-center">
                  <input
                    className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                    placeholder="First name"
                    type="text"
                  />
                  <input
                    className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                    placeholder="Last name"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1"
                  placeholder="Email id"
                  type="email"
                />
                <textarea
                  className="bg-[transparent] h-[105px] font-roboto text-base [outline:none] self-stretch rounded box-border flex flex-col items-start justify-start p-3 text-darkgray border-[1px] border-solid border-gray1"
                  placeholder="Comments or questions"
                  rows={10}
                  required={true}
                />
                <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-royalblue lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
                  <div className="w-[203.1px] relative text-base font-roboto text-gray-white text-center inline-block">
                    Submit
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
