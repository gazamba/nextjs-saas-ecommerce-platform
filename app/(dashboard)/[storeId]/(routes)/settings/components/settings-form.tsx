"use client";

import { Store } from "@prisma/client";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm = ({ initialData }: SettingsFormProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button variant="destructive" size="icon" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default SettingsForm;
