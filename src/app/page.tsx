import CreateTodo from '@/components/CreateTodo';
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap items-center justify-center md:justify-between gap-5 md:gap-0 p-5 md:p-3">
      {/* <section className="flex flex-col gap-2">
        <DatePickerWithRange />
        <CalendarSimple />
      </section> */}
      <section className="max-w-3xl w-full">
        <CreateTodo />
        <Todos />
      </section>
    </main>
  );
}
