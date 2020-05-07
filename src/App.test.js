import React from "react";
import { render, wait } from "@testing-library/react";
import  { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");

test("App fetches mockData and renders it", async () => {
    const mockData = { 
        id: '123',
        image: { medium: 'image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { queryAllByText } = render(<App />);

    await wait();
    expect(queryAllByText(/name/i)).toHaveLength(1)
})