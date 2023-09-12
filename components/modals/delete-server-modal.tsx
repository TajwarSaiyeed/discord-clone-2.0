'use client'

import axios from "axios";
import {
    Dialog,
    DialogContent, DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"


import {useModal} from "@/hooks/use-modal-store";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useRouter} from "next/navigation";

export const DeleteServerModal = () => {
    /**
     * @hooks
     * Modal state
     * @type {{isOpen: boolean, onClose: function, type: string, data: any}}
     */
    const {isOpen, onClose, type, data} = useModal()

    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const isModalOpen = isOpen && type === 'deleteServer'
    const {server} = data

    const onClick = async () => {
        try {
            setIsLoading(true)
            await axios.delete(`/api/servers/${server?.id}`)
            onClose()
            router.refresh()
            router.push('/')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (<Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className={'bg-white text-black p-0 overflow-hidden rounded-lg'}>
            <DialogHeader className={'pt-8 px-6'}>
                <DialogTitle className={'text-2xl text-center font-bold'}>
                    Delete Server
                </DialogTitle>
                <DialogDescription className={'text-center text-zinc-500'}>
                    Are you sure you want to do this? <br/>
                    <span className={'text-indigo-500 font-semibold'}>{server?.name}</span> will be permanently deleted.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className={'bg-gray-100 px-6 py-4'}>
                <div className={'flex items-center justify-between w-full'}>
                    <Button
                        disabled={isLoading}
                        onClick={onClose}
                        variant={'ghost'}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isLoading}
                        onClick={onClick}
                        variant={'primary'}
                    >
                        Confirm
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}