"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PoneglyphCode } from "@/registry/newspapercn/custom/poneglyph-code";

interface ComponentPreviewProps {
  demo: React.ReactNode;
  code: string;
}

export function ComponentPreview({ demo, code }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-3">
        <div className="flex min-h-[200px] items-center justify-center rounded-sm border border-border bg-card p-6">
          {demo}
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-3">
        <PoneglyphCode code={code} language="tsx" copyable />
      </TabsContent>
    </Tabs>
  );
}
