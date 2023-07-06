"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { generateLink } from "@/helpers/gifsHelper";
import useDebounce from "@/helpers/debounce";

const API_KEY = "g99OpcbfX3iS3O1chLaPjJZTWeAkecNY";

const Gifs = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const debouncedValue = useDebounce(inputValue, 300, () => setPage(0));

  const gifsTreshold = debouncedValue?.length > 2;

  const { data, isLoading, error } = useQuery(
    ["gifs", debouncedValue, page],
    async () => {
      const gifs = await fetch(
        generateLink({
          api_key: API_KEY,
          q: debouncedValue,
          limit: 10,
          offset: page * 10,
          rating: "g",
          lang: "en",
        })
      );

      if (!gifs.ok) {
        throw new Error("Failed to fetch gifs");
      }

      return gifs.json();
    },
    {
      enabled: gifsTreshold,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className="flex flex-wrap justify-center flex-col">
      <div className="mb-5 self-center">
        <Input value={inputValue} onChange={setInputValue} />
      </div>
      {gifsTreshold && (
        <div>
          {(data?.data || page > 0) && (
            <div className="flex justify-center items-center gap-6 text-black mb-5">
              <Button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 0}
              >
                Prev
              </Button>
              <div>{page + 1}</div>
              <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
            </div>
          )}
          {isLoading && <p className="text-center">Loading...</p>}
          {error && (
            <p className="text-red-600">Error: {(error as Error)?.message}</p>
          )}
          {data?.data && (
            <div className="flex flex-wrap gap-3 justify-center">
              {data?.data?.map((gif: any) => (
                <img
                  className="flex-auto lg:max-w-[50%]"
                  key={gif.id}
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gifs;
