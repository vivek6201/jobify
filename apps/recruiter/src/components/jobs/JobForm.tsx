"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  JobValidationsType,
  jobValidations,
} from "@repo/validations/src/index";

import { Button } from "@repo/ui/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/ui/form";
import { Input } from "@repo/ui/ui/input";
import { Textarea } from "@repo/ui/ui/textarea";
import { Switch } from "@repo/ui/ui/switch";
import { Calendar } from "@repo/ui/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@repo/ui/utils";
import { Label } from "@repo/ui/ui/label";
import { RadioGroup, RadioGroupItem } from "@repo/ui/ui/radio-group";

const JobForm = () => {
  const form = useForm<JobValidationsType>({
    resolver: zodResolver(jobValidations),
    defaultValues: {
      jobType: "FullTime",
      isPaid: false,
    },
  });

  const jobType = form.watch("jobType");
  const isPaid = form.watch("isPaid");

  return (
    <div className="my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit()} className="space-y-8">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter job description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastDateToApply"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Last date to apply</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Job type</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="FullTime" id="r2" />
                      <Label htmlFor="r2">Full Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Internship" id="r3" />
                      <Label htmlFor="r3">Internship</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {jobType === "Internship" ? (
            <div className="flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name="isPaid"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Is Paid</FormLabel>
                      <FormDescription>
                        Is this Internship paid?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {isPaid ? (
                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stipend</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Stipend"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : null}

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Internship duration"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : (
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Salary"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="officeLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Office Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Office Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="workMode"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Work Mode</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Onsite" id="onsite"/>
                      <Label htmlFor="onsite">Onsite</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Remote" id="remote" />
                      <Label htmlFor="remote">Remote</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default JobForm;
