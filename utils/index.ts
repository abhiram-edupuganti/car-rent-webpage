import { CarProps, FilterProps } from "@/types";
// require("dotenv").config();

export async function fetchCars(filters : FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
      'X-RapidAPI-Key': '11315b6bc8mshada7da1b0556fb4p138a77jsn766f9a55b97e',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com' 
    }

    const response = await fetch(
      //below code must be used when ur car images api works properly
      // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      // {
      //   headers: headers,
      // }
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,{headers : headers}

    );
    
    const result = response.json();

    return result;
    
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1;
    const ageFactor = 0.05; 
  
    
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
