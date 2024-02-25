import {
  Badge,
  BadgeProps,
  Button,
  Calendar,
  CalendarProps,
  Modal,
  Row,
} from 'antd';
import { FC, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import FormEvent, { IEvent } from '../components/FormEvent';

const MyCalendar: FC = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const myData = [
    { date: '26.02.2024', type: 'error', content: 'qqqqqqqqq' },
    { date: '27.02.2024', type: 'success', content: '1111111' },
  ];

  // Преобразуем даты из myData в объекты Dayjs
  const eventData = myData.map(item => ({
    ...item,
    date: dayjs(item.date, 'DD.MM.YYYY'), // Преобразование строки в объект Dayjs
  }));

  console.log('eventData', eventData);

  const dateCellRender = (value: Dayjs) => {
    const filteredEvents = eventData.filter(item =>
      item.date.isSame(value, 'day')
    );

    return (
      <ul className="events">
        {filteredEvents.map(item => (
          <li key={item.content} style={{ listStyle: 'none' }}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  const handleToggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const submitForm = (formValues: IEvent) => {
    handleToggleModal();
    console.log(formValues);
  };

  return (
    <>
      <Calendar cellRender={cellRender} />
      <Row justify="center">
        <Button onClick={handleToggleModal}>Add event</Button>
      </Row>
      <Modal open={isShowModal} onCancel={handleToggleModal} footer={null}>
        <FormEvent submitForm={submitForm} />
      </Modal>
    </>
  );
};

export default MyCalendar;
