"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export default function TestPage() {

  useEffect(() => {

    async function testConnection() {

      const {
        data,
        error
      } = await supabase.auth.getSession();

      console.log("SESSION:", data);

      console.log("ERROR:", error);

    }

    testConnection();

  }, []);

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-4xl font-bold">

          Supabase Connected ✅

        </h1>

        <p className="text-gray-400 mt-4">

          BookPulse backend test page

        </p>

      </div>

    </div>

  );

}