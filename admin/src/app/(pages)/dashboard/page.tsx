"use client";

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Component } from "@/components/chart1";
import { Component1 } from "@/components/chart2";
import { Component3 } from "@/components/chart3";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" p-5 w-[1280px] flex flex-col gap-5">
      <div className="flex justify-around items-center">
        <Component />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar className="text-red-600 bg-red-100 rounded-lg shadow-lg h-[800px]" />
        </LocalizationProvider>
        <Component1 />
      </div>
      <Component3 />
    </div>
  );
};

export default page;
