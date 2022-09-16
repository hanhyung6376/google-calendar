import React, { FC } from 'react';
import { useInputs, useGoogle } from 'hooks';
import { Input, Flex, Button, Modal } from 'components/common';
import { useRecoilState } from 'recoil';
import { insertModalAtom } from '../store';

const InsertModal: FC = () => {
    const [item, setItem] = useRecoilState(insertModalAtom);
    const [form, setForm, onChange, reset] = useInputs({
        summary: '',
        description: '',
        visibility: 'default'
    });
    const { insert } = useGoogle();

    if (!item.visible) {
        return null;
    }

    const onVisible = () => {
        setItem({ ...item, visible: false });
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { summary, description, visibility } = form;
        insert({ summary, description, visibility, date: item.date });
        reset();
        onVisible();
    };

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setForm({ ...form, visibility: value });
    };

    return (
        <Modal>
            <form onSubmit={onSubmit}>
                <Flex container flexDirection="column" alignItems="center" spacing="1rem">
                    <Input placeholder="일정" name="summary" value={form.summary} onChange={onChange} />
                    <Input placeholder="내용" name="description" value={form.description} onChange={onChange} />
                    <select onChange={onSelect}>
                        <option key="default">default</option>
                        <option key="public">public</option>
                        <option key="private">private</option>
                        <option key="confidential">confidential</option>
                    </select>
                    <Button cyan>Confirm</Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default InsertModal;
