import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type EnrollmentInfoFormProps = {
    data: {
        year_level: string;
        admission_date: Date;
        student_code: number
        student_type: string;
        course_id: number;
        term_id: number;
        enrollment_date: Date;
        enrollment_status: string;
    };
    setData: (field: string, value: any) => void;
    errors: Record<string, string>;
    processing: boolean;
};


export default function EnrollmentInfoForm({ data, setData, errors, processing }: EnrollmentInfoFormProps) {
    return (<>

    </>
    )
}
